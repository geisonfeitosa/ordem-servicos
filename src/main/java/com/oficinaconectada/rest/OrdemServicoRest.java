package com.oficinaconectada.rest;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oficinaconectada.dao.OrdemServicoDao;
import com.oficinaconectada.model.OrdemServico;


@RestController
@RequestMapping("/rest/ordem-servico")
public class OrdemServicoRest {
	
	@Autowired
	private OrdemServicoDao ordemServicoDao;
	
	@PostMapping
	public void save(@RequestBody OrdemServico ordemServico) {
		ordemServicoDao.save(ordemServico);
	}
	
	@GetMapping
	public List<OrdemServico> list() {
		List<OrdemServico> result = new ArrayList<OrdemServico>();
		ordemServicoDao.findAll().forEach(a -> {
			result.add(a);
		});
		
		return result;
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable Integer id) {
		this.ordemServicoDao.deleteById(id);
	}
	
}
