package net.odtel.knowledgy.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

@Controller
public class WelcomeController {

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index (Map<String, Object> model) {

        model.put("title", "Title");
        model.put("msg", "Hello Acid!");

        return "index";
    }
}
