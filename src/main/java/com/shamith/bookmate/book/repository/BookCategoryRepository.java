package com.shamith.bookmate.book.repository;

import com.shamith.bookmate.book.modal.BookCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookCategoryRepository extends JpaRepository<BookCategory, Integer> {
}
