package ru.kata.spring.boot_security.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.models.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping(value = "/api")
@CrossOrigin
public class ApplicationAPIController {
    private UserService userService;
    @Autowired
    ApplicationAPIController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping(value = "/get_login")
    public ResponseEntity<User> getCurrentUser(@AuthenticationPrincipal User user) {
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.ok(new User());
    }
    @GetMapping(value = "/get_users_table")
    ResponseEntity<List<User>> getUsersTable(){
        return new ResponseEntity<>(userService.getUserList(), HttpStatus.OK);
    }

    @GetMapping(value = "/add_user")
    ResponseEntity<User> addUser(@RequestBody User user){
        userService.addUser(user);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }
    @GetMapping(value = "/user/{id}")
    ResponseEntity<User> getUser(@PathVariable Long id) {
        return new ResponseEntity<>(userService.getUser(id),HttpStatus.OK);
    }
    @GetMapping(value ="/delete_user/{id}")
    ResponseEntity<Long> deleteUser(@PathVariable Long id){
        userService.removeUser(id);
        return ResponseEntity.ok(id);
    }
    @GetMapping(value ="/edit_user/{id}")
    ResponseEntity<User>editUser(@PathVariable Long id,@RequestBody User user){
        userService.redactUser(id,user);
        return new ResponseEntity<>(user,HttpStatus.OK);
    }


}
