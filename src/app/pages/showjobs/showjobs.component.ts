import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/job.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-showjobs',
  templateUrl: './showjobs.component.html',
  styleUrls: ['./showjobs.component.css']
})
export class ShowjobsComponent implements OnInit {


  

  jobTitles:string[];
  selectedCompany:string ="";
  selectedType:string ="";
  selectedLocation:string ="";


  constructor(private router: Router,private jobService:JobService) { }

  ngOnInit(): void {
    this.jobService.getJobs().subscribe(data=>{
        this.jobTitles = data as string[];
    })
  }

  showId(id):void {
    this.router.navigate(['/jobdetails'], { queryParams: {query: id}});
  }

  CompanyEvent(event){
    this.selectedCompany = event.target.value;
    // console.log(this.selectedCompany);
  }
  TypeEvent(event){
    this.selectedType = event.target.value;
    // console.log(this.selectedType);
  }
  LocationEvent(event){
    this.selectedLocation = event.target.value;
    // console.log(this.selectedLocation);
  }

}
