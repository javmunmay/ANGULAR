import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturaService } from '../../servicio/factura.service';
import { FormsModule } from '@angular/forms';
import { Factura } from '../../modelos/factura';
import { DetalleFactura } from '../../modelos/detalle-factura';


@Component({
  selector: 'app-lista-detalle',
  standalone: false,
  
  templateUrl: './lista-detalle.component.html',
  styleUrl: './lista-detalle.component.css'
})
export class ListaDetalleComponent {

  detallesFactura: any[] = [];
  idFactura: number =0;
  numeroFactura: string = "";
  totalIVA: number = 0;
  totalGeneral: number = 0;
  mostrarFormulario: boolean = false;
  

  detalle = { 
    cantidad: 1,
    concepto: '',
    precio: 0,
    tipo_iva: 0
  };



  constructor(
    private route: ActivatedRoute,
    private facturaService: FacturaService,
    private peticion: FacturaService,
    private ruta: Router
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
        const iva = this.calcularIVA(detalle.precio , detalle.tipo_iva);
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


  calcularIVA(precio: number, tipoIVA:number):number{
    return parseFloat((precio*(tipoIVA / 100)).toFixed(2));
  }

  
  calcularTotal(precio: number, tipoIVA:number):number{
    return parseFloat((precio + this.calcularIVA(precio, tipoIVA)).toFixed(2));
  }


  anadirDetalleFactura(){

  }

  abrirCerrarFormulario(){
    this.mostrarFormulario = !this.mostrarFormulario;
  }


  onSubmit(form: DetalleFactura) {
       
    console.log("form: ", form);
    console.log("this.detallesFactura: ", this.detallesFactura);
    console.log(" Factura: ", this.detallesFactura, " en proceso de ser añadida o modificada. ");

    form.id = this.idFactura;
    console.log("form.id: "+ form);
    

    this.peticion.anadirDetalleFactura(form).subscribe(data =>{
      
        console.log('Factura actualizada:', data);
        this.detallesFactura = data;
      
    });

  }

}

