import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmService } from '../services/confirm.service';

@Component({
  selector: 'app-email-confirmation',
  templateUrl: './email-confirmation.component.html',
  styleUrls: ['./email-confirmation.component.css']
})
export class EmailConfirmationComponent implements OnInit {


  public showSuccess: boolean;
  public showError: boolean;
  public errorMessage: string;

  constructor(private route: ActivatedRoute, public confirmService: ConfirmService) { }
  ngOnInit(): void {
    this.showError = this.showSuccess = false;
    const userId = this.route.snapshot.queryParams['userId'];
    const code = this.route.snapshot.queryParams['code'];
    console.log('userId in component', userId);
    console.log('code in component', code);
    this.confirmService.confirmation(userId, code).subscribe(res => {
      console.log(res);
      this.showSuccess = true;
    }, error => {
      this.showError = true;
      this.errorMessage = error;
    })
  }
}
