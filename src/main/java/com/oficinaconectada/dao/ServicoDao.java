package com.oficinaconectada.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.oficinaconectada.model.Servico;


@Repository
public interface ServicoDao extends CrudRepository<Servico, Integer> {
	
	List<Servico> findAllByOrderByNomeAsc();
	
	@Query("select s from Servico s where lower(s.nome) like %:nome% order by s.nome")
	List<Servico> findByNome(@Param("nome") String nome);
	
}
