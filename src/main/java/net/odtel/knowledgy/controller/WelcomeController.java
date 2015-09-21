package net.odtel.knowledgy.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

@Controller
public class WelcomeController {

    public static void main (String[] args) throws InterruptedException, IOException {
        List<String> list = new ArrayList<>();
        list.add("DJKDJKDJK");
        list.add("DD");
        list.add("DPPPP!POOPOPOASSSPQOOP");

        Collections.sort(list, (s, k) -> Integer.compare(s.length(), k.length()));


/*
        new Thread(() -> {
            while (true) System.out.println("H+");
        }).start();

        Thread.currentThread().sleep(100);
*/

        String contents = new String(Files.readAllBytes(Paths.get("/home/acid/A_J_Cronin_-_The_Citadel.fb2")), StandardCharsets.UTF_8);
        Stream<String> worlds = Stream.of(contents.split("[\\P{L}]+")).distinct().sorted();
        worlds.forEach(System.out::println);

    }

    @RequestMapping(value = "/index", method = RequestMethod.GET)
    public String index (Map<String, Object> model) {

        model.put("title", "Title");
        model.put("msg", "Hello Acid!");

        return "index";
    }

}
