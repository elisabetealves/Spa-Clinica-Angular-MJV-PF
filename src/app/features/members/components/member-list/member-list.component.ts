import { Component, OnInit } from '@angular/core';
import { Member } from '../../models/member.model';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {
  members?: Array<Member> = [];
  filteredMembers?: Array<Member> = [];
  searchBy?: string = 'name';

  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
    this.members = this.membersService.getMembers();
    this.filteredMembers = this.members;
  }

  getMembersByName(event: any) {
    const term = event.target.value;
  }

  searchMember(event: any) {
    const term = event?.target.value;

    if (this.searchBy === 'name') {
      this.filteredMembers = this.members?.filter(member => {
        return member.name.toUpperCase().search(term.toUpperCase()) > -1;
      });
    } else if (this.searchBy === 'id') {
        this.filteredMembers = this.members?.filter(member => {
          return member.id === parseInt(term);
        });
    }

    if (this.filteredMembers?.length === 0 && term.length === 0) {
      this.filteredMembers = this.members;
    } 
  }

}
