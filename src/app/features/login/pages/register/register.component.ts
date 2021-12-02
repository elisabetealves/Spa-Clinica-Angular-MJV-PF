import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/features/members/models/member.model';
import { MembersService } from 'src/app/features/members/services/members.service';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  member: Member = this.membersService.getDefaultMember();

  constructor(private membersService: MembersService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(memberForm: NgForm) {
    const formValue = memberForm.form.value;
    this.member.name = formValue.name;
    this.member.email = formValue.email;
    this.member.password = formValue.password;
    this.member.monthlyFee = formValue.monthlyFee;
    this.member.membership = formValue.membership;

    this.membersService.createMember(this.member);
    alert('Membro adicionado com sucesso');
    this.router.navigateByUrl('/members');
  }

}
