package codesquad.secondhand.controller;

import static codesquad.secondhand.exception.code.CommonResponseCode.*;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import codesquad.secondhand.dto.ResponseListDto;
import codesquad.secondhand.dto.location.LocationDto;
import codesquad.secondhand.service.LocationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/locations")
public class LocationController {

	private final LocationService locationService;

	@GetMapping
	public ResponseListDto<LocationDto> showLocations() {
		log.info("[LocationController.showLocations]");
		List<LocationDto> locationDtos = locationService.showAllLocations();
		return ResponseListDto.of(RESPONSE_SUCCESS, locationDtos);
	}

}
