package com.oficinaconectada.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.oficinaconectada.model.Cliente;


@Repository
public interface ClienteDao extends CrudRepository<Cliente, Integer> {
	
	List<Cliente> findAllByOrderByNomeAsc();
	
	@Query("select c from Cliente c where lower(c.nome) like %:nome% order by c.nome")
	List<Cliente> findByNome(@Param("nome") String nome);

}
