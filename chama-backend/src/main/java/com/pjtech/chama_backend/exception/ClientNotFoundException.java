package com.pjtech.chama_backend.exception;

public class ClientNotFoundException extends RuntimeException{

    public ClientNotFoundException(Long id){
        super("Could not find the client with id " + id);
    }
}
