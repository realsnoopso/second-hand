package codesquad.secondhand.oauth;

import lombok.Builder;
import lombok.Getter;

@Getter
public class OauthProvider {

	private final String clientId;
	private final String clientSecret;
	private String redirectUrl;
	private String tokenUrl;
	private String userInfoUrl;

	public OauthProvider(OauthProperties.User user, OauthProperties.Provider provider) {
		this(user.getClientId(), user.getClientSecret(), user.getRedirectUri(),
			provider.getTokenUri(), provider.getUserInfoUri());
	}

	@Builder
	public OauthProvider(String clientId, String clientSecret, String redirectUrl, String tokenUrl,
		String userInfoUrl) {
		this.clientId = clientId;
		this.clientSecret = clientSecret;
		this.redirectUrl = redirectUrl;
		this.tokenUrl = tokenUrl;
		this.userInfoUrl = userInfoUrl;
	}
}
