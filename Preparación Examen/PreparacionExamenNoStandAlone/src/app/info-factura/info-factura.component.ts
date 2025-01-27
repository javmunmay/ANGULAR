import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacturaService } from '../servicio/factura.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-info-factura',
  standalone: false,
  
  templateUrl: './info-factura.component.html',
  styleUrl: './info-factura.component.css'
})


export class InfoFacturaComponent implements OnInit {

  detallesFactura: any[] = [];
  idFactura!: number;
  numeroFactura!: string;
  totalIVA: number = 0;
  totalGeneral: number = 0;
  mostrarFormulario: boolean = false;
  

  constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService,
    private peticion: FacturaService
  )
  { }

  

  ngOnInit() {
    const params = this.route.snapshot.params;
    
    this.idFactura = Number(params['id']);
    this.numeroFactura = params['numero'];

    console.log("IdFactura Capturada: "+this.idFactura);

    this.facturaService.detalleFactura(this.idFactura).subscribe(datos => {
      console.log("Datos de la factura: ", datos);
      this.detallesFactura = datos.map(detalle => {
        const iva = this.calcularIVA(detalle.precio, detalle.tipo_iva);
        const total = this.calcularTotal(detalle.precio, detalle.tipo_iva);
        
        //Sumar todos los totales
        this.totalIVA += iva;
        this.totalGeneral += total;
        
        return{
          ...detalle,
          iva: iva,
          total: total
        };
      });
    })

  }

  alternarFormulario() {
    this.mostrarFormulario = !this.mostrarFormulario;
  }

  

  calcularIVA(precio: number, tipoIVA:number):number{
    return precio*(tipoIVA / 100);
  }

  calcularTotal(precio: number, tipoIVA:number):number{
    return precio+ this.calcularIVA(precio, tipoIVA)
  }
}
