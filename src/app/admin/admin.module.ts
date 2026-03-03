import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { LogsComponent } from './logs/logs.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ArchiveComponent } from './archive/archive.component';
import { AuditLogsComponent } from './audit-logs/audit-logs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UsersComponent,
    LogsComponent,
    AddUserComponent,
    EditUserComponent,
    ArchiveComponent,
    AuditLogsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
