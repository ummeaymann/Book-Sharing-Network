package com.shamith.bookmate.user.repository;

import com.shamith.bookmate.user.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository  extends JpaRepository<User, Integer> {
    Optional<User> findByEmail(String username);
}
