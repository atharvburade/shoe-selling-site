import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sample_shoes, sample_tags } from 'src/data';
import { shoeS_BY_SEARCH_URL, shoeS_BY_TAG_URL, shoeS_TAGS_URL, shoeS_URL, shoe_BY_ID_URL } from '../shared/constants/urls';
import { shoe } from '../shared/models/shoe';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class shoeService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<shoe[]> {
    return this.http.get<shoe[]>(shoeS_URL);
  }

  getAllshoesBySearchTerm(searchTerm: string) {
    return this.http.get<shoe[]>(shoeS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(shoeS_TAGS_URL);
  }

  getAllshoesByTag(tag: string): Observable<shoe[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<shoe[]>(shoeS_BY_TAG_URL + tag);
  }

  getshoeById(shoeId:string):Observable<shoe>{
    return this.http.get<shoe>(shoe_BY_ID_URL + shoeId);
  }

}
