package sslee.household.controller.restController;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class TestRestController {

    @GetMapping("/test")
    public List<String> test(){
        return Arrays.asList("안녕","Hello");
    }

}
