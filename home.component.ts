import { Component } from '@angular/core';
import { Imovel } from '../imovel';
import { ImovelService } from '../imovel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  imoveisDB: Imovel[] = []
    constructor(private imovelService: ImovelService) {
        this.imoveisDB = this.imovelService.buscartodososimoveis()
    }
    Removeracentos(str: String) {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    }
    listarImoveiscomfiltro(texto: String) {
        if(texto == "") {
            this.imoveisDB = this.imovelService.buscartodososimoveis()
        }
        else{
            const imoveisFiltrados: Imovel[] = []
            for (let i = 0; i < this.imoveisDB.length; i++) { 
                const imovel = this.imoveisDB[i]
                const textoM = this.Removeracentos(texto.toUpperCase())
                const cidadeImovelM = this.Removeracentos(imovel.cidade.toUpperCase())
                const estadoImovelM = this.Removeracentos(imovel.estado.toUpperCase())
                if (cidadeImovelM.search(textoM) == 0 || estadoImovelM.search(textoM) == 0) {
                    //aparecer na página
                    imoveisFiltrados.push(imovel)
                }
            } 
            this.imoveisDB = imoveisFiltrados
        }
    
    }
}
