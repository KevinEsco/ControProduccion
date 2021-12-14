import { Component, OnInit } from '@angular/core';
import { ClienteMaterialModule } from 'src/app/components/cliente/cliente.material.module';
import { Sector } from 'src/app/models/sector';

const ELEMENT_DATA = [
  { idSector: '01', codigoSector: '1001', descSector: 'Sector 01' },
  { idSector: '02', codigoSector: '1002', descSector: 'Sector 02' },
  { idSector: '03', codigoSector: '1003', descSector: 'Sector 03' },
  { idSector: '04', codigoSector: '1004', descSector: 'Sector 04' },
  { idSector: '05', codigoSector: '1005', descSector: 'Sector 05' },
  { idSector: '06', codigoSector: '1006', descSector: 'Sector 06' },
  { idSector: '07', codigoSector: '1007', descSector: 'Sector 07' },
  { idSector: '08', codigoSector: '1008', descSector: 'Sector 08' },
  { idSector: '09', codigoSector: '1009', descSector: 'Sector 09' },
  { idSector: '10', codigoSector: '1010', descSector: 'Sector 10' },
  { idSector: '11', codigoSector: '1011', descSector: 'Sector 11' },
  { idSector: '12', codigoSector: '1012', descSector: 'Sector 12' },
  { idSector: '13', codigoSector: '1013', descSector: 'Sector 13' },
  { idSector: '14', codigoSector: '1014', descSector: 'Sector 14' },
];

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css'],
})
export class SectorComponent implements OnInit {
  displayedColumns: string[] = ['idSector', 'codigoSector', 'descSector'];
  dataSource = ELEMENT_DATA;
  constructor() {}
  ngOnInit() {}
}
