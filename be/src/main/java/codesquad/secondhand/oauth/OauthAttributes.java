package codesquad.secondhand.oauth;

import codesquad.secondhand.dto.oauth.MemberProfile;

import java.util.Arrays;
import java.util.Map;

public enum OauthAttributes {
    GITHUB("github") {
        @Override
        public MemberProfile of(Map<String, Object> attributes) {
            return MemberProfile.builder()
                    .oauthId(String.valueOf(attributes.get("id")))
                    .email((String) attributes.get("email"))
                    .name((String) attributes.get("name"))
                    .imageUrl((String) attributes.get("avatar_url"))
                    .build();
        }
    },
    NAVER("naver") {
        @Override
        public MemberProfile of(Map<String, Object> attributes) {
            Map<String, Object> response = (Map<String, Object>) attributes.get("response");
            return MemberProfile.builder()
                    .oauthId((String) response.get("id"))
                    .email((String) response.get("email"))
                    .name((String) response.get("name"))
                    .imageUrl((String) response.get("profile_image"))
                    .build();
        }
    },
    GOOGLE("google") {
        @Override
        public MemberProfile of(Map<String, Object> attributes) {
            return MemberProfile.builder()
                    .oauthId(String.valueOf(attributes.get("sub")))
                    .email((String) attributes.get("email"))
                    .name((String) attributes.get("name"))
                    .imageUrl((String) attributes.get("picture"))
                    .build();
        }
    };

    private final String providerName;

    OauthAttributes(String name) {
        this.providerName = name;
    }

    public static MemberProfile extract(String providerName, Map<String, Object> attributes) {
        return Arrays.stream(values())
                .filter(provider -> providerName.equals(provider.providerName))
                .findFirst()
                .orElseThrow(IllegalArgumentException::new)
                .of(attributes);
    }

    public abstract MemberProfile of(Map<String, Object> attributes);
}
