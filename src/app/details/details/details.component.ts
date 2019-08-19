import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeseoI } from '../../interface/deseo.interface';
import { FirestoreService } from '../../service/firestore/firestore.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id;
  data: DeseoI;

  constructor(private ActivatedRoute: ActivatedRoute, private firestoreService: FirestoreService, private route: Router) { }

  ngOnInit() {
    this.id = this.ActivatedRoute.snapshot.params['id'];
    this.loadDeseo();

  }

  loadDeseo(){
    this.firestoreService.getDeseo(this.id).subscribe(res=>{
      this.data = res;
    })
  }

  updateDeseo(){
    this.firestoreService.updateDeseo(this.id, this.data);
    this.route.navigate(['/deseos'])


  }

}
