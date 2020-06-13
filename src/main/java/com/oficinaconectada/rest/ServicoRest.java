package com.oficinaconectada.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oficinaconectada.dao.ServicoDao;
import com.oficinaconectada.model.Servico;


@RestController
@RequestMapping("/rest/servico")
public class ServicoRest {
	
	@Autowired
	private ServicoDao servicoDao;
	
	@PostMapping
	public Servico save(@RequestBody Servico servico) {
		return servicoDao.save(servico);
	}
	
	@GetMapping
	public List<Servico> list() {
		return servicoDao.findAllByOrderByNomeAsc();
	}
	
	@PostMapping("/complete")
	public List<Servico> list(@RequestBody String nome) {
		return servicoDao.findByNome((String) nome);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		this.servicoDao.deleteById(id);
	}
	
}
