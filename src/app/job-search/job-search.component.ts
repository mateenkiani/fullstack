import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/job.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  jobTitles: string[];
  selectedCompany: string = "";
  selectedType: string = "";
  selectedLocation: string = "";
  query: object;

  constructor(private router: Router,private route: ActivatedRoute, private jobService: JobService) { }

  showId(object):void {
    this.router.navigate(['/jobdetails'], { queryParams: {query: object}});
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params;
      this.jobService.searchJobs(this.query).subscribe(data => {
        this.jobTitles = data as string[];
      })
    });

  }

  CompanyEvent(event) {
    this.selectedCompany = event.target.value;
    // console.log(this.selectedCompany);
  }
  TypeEvent(event) {
    this.selectedType = event.target.value;
    // console.log(this.selectedType);
  }
  LocationEvent(event) {
    this.selectedLocation = event.target.value;
    // console.log(this.selectedLocation);
  }

}
