package com.pjtech.chama_backend.controller;

import com.pjtech.chama_backend.exception.ClientNotFoundException;
import com.pjtech.chama_backend.model.Client;
import com.pjtech.chama_backend.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ClientController {

    @Autowired
    private ClientRepository clientRepository;

    @PostMapping("/client")
    Client addClient(@RequestBody Client newClient) {
        return clientRepository.save(newClient);
    }

    @GetMapping("/clients")
    List<Client> getAllClients() {
        return clientRepository.findAll();
    }

    @GetMapping("/client/{id}")
    Client getClientById(@PathVariable Long id){
        return clientRepository.findById(id)
                .orElseThrow(()->new ClientNotFoundException(id));
    }

    @PutMapping("/client/{id}")
    Client updateClient(@RequestBody Client newClient, @PathVariable Long id) {
        return clientRepository.findById(id)
                .map(client -> {
                    client.setFirstName(newClient.getFirstName());
                    client.setLastName(newClient.getLastName());
                    client.setEmail(newClient.getEmail());
                    client.setPhone(newClient.getPhone());
                    return clientRepository.save(client);
                }).orElseThrow(()-> new ClientNotFoundException(id));
    }

    @DeleteMapping("/client/{id}")
    String deleteClient(@PathVariable Long id) {
        if(!clientRepository.existsById(id)) {
            throw new ClientNotFoundException(id);
        }
        clientRepository.deleteById(id);
        return "Client with id " + id + " has been deleted successfully.";
    }
}
