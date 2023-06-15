//package codesquad.secondhand.controller;
//
//import codesquad.secondhand.dto.ResponseDto;
//import codesquad.secondhand.dto.category.CategoryDto;
//import codesquad.secondhand.service.CategoryService;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import java.util.List;
//
//import static codesquad.secondhand.dto.StatusCode.RESPONSE_SUCCESS;
//
//@Slf4j
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/category")
//public class CategoryController {
//
//    private final CategoryService categoryService;
//
//    @GetMapping
//    public ResponseEntity<ResponseDto<List<CategoryDto>>> showCategories() {
//        log.info("[CategoryController.showCategories]");
//        List<CategoryDto> categoryDtos = categoryService.showAllCategories();
//        return ResponseEntity.ok(ResponseDto.of(RESPONSE_SUCCESS, categoryDtos));
//    }
//
//}
