package com.pjtech.chama_backend.repository;

import com.pjtech.chama_backend.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientRepository extends JpaRepository<Client, Long> {
}
