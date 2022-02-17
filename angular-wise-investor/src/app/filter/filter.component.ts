import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })

export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  transform(projects: any[], searchText: string): any[] {
    if (!projects) {
      return [];
    }
    if (!searchText) {
      return projects;
    }
    searchText = searchText.toLocaleLowerCase();

    return projects.filter(project => {
      return project.title.toLocaleLowerCase().includes(searchText);
    });
  }
}
