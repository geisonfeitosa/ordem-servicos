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

import com.oficinaconectada.dao.ClienteDao;
import com.oficinaconectada.model.Cliente;


@RestController
@RequestMapping("/rest/cliente")
public class ClienteRest {
	
	@Autowired
	private ClienteDao clienteDao;
	
	@PostMapping
	public Cliente save(@RequestBody Cliente cliente) {
		return clienteDao.save(cliente);
	}
	
	@GetMapping
	public List<Cliente> list() {
		return clienteDao.findAllByOrderByNomeAsc();
	}
	
	@PostMapping("/complete")
	public List<Cliente> list(@RequestBody String nome) {
		return clienteDao.findByNome((String) nome);
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		this.clienteDao.deleteById(id);
	}
	
}
