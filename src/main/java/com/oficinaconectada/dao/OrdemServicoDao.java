package com.oficinaconectada.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.oficinaconectada.model.OrdemServico;


@Repository
public interface OrdemServicoDao extends CrudRepository<OrdemServico, Integer> {

}
