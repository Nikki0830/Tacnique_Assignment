package com.nikita.employeehubui.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

	@GetMapping("/")
    public String home() {
        return "index"; // Will render index.ftl
    }
	
	@GetMapping("/form")
    public String showFormPage() {
        return "form"; // This loads form.ftl
    }
}
