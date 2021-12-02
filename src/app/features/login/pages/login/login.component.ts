import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembersService } from 'src/app/features/members/services/members.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email?: string;
  password?: string;
  error: boolean = false;

  constructor(
    private membersService: MembersService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  authenticate() {
    const member = this.membersService.getMemberByEmailAndPassword(this.email, this.password);
    if (!member) {
      this.error = true;
    } else {
      sessionStorage.setItem('member', JSON.stringify(member));
      this.router.navigateByUrl('members');
    }
  }
}
