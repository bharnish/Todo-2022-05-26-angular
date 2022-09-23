/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { ViewModelDTO } from '../models/view-model-dto';
import { StringDTO } from '../models/string-dto';
import { TodoDTO } from '../models/todo-dto';
import { GroupingViewModelDTO } from '../models/grouping-view-model-dto';
@Injectable({
  providedIn: 'root',
})
class TasksService extends __BaseService {
  static readonly getApiTasksPath = '/api/Tasks';
  static readonly postApiTasksPath = '/api/Tasks';
  static readonly getApiTasksTextPath = '/api/Tasks/text';
  static readonly getApiTasksIdPath = '/api/Tasks/{id}';
  static readonly putApiTasksIdPath = '/api/Tasks/{id}';
  static readonly deleteApiTasksIdPath = '/api/Tasks/{id}';
  static readonly postApiTasksIdPostponePath = '/api/Tasks/{id}/postpone';
  static readonly postApiTasksIdPostponeThresholdPath = '/api/Tasks/{id}/postponeThreshold';
  static readonly putApiTasksIdCompletedPath = '/api/Tasks/{id}/completed';
  static readonly deleteApiTasksCompletedPath = '/api/Tasks/completed';
  static readonly getApiTasksGroupByGroupByPath = '/api/Tasks/groupBy/{groupBy}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param params The `TasksService.GetApiTasksParams` containing the following parameters:
   *
   * - `Future`:
   *
   * - `Filters`:
   *
   * - `DbKey`:
   *
   * - `Completed`:
   *
   * @return Success
   */
  getApiTasksResponse(params: TasksService.GetApiTasksParams): __Observable<__StrictHttpResponse<ViewModelDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.Future != null) __params = __params.set('Future', params.Future.toString());
    if (params.Filters != null) __params = __params.set('Filters', params.Filters.toString());
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    if (params.Completed != null) __params = __params.set('Completed', params.Completed.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<ViewModelDTO>;
      })
    );
  }
  /**
   * @param params The `TasksService.GetApiTasksParams` containing the following parameters:
   *
   * - `Future`:
   *
   * - `Filters`:
   *
   * - `DbKey`:
   *
   * - `Completed`:
   *
   * @return Success
   */
  getApiTasks(params: TasksService.GetApiTasksParams): __Observable<ViewModelDTO> {
    return this.getApiTasksResponse(params).pipe(
      __map(_r => _r.body as ViewModelDTO)
    );
  }

  /**
   * @param params The `TasksService.PostApiTasksParams` containing the following parameters:
   *
   * - `replace`:
   *
   * - `body`:
   *
   * - `DbKey`:
   */
  postApiTasksResponse(params: TasksService.PostApiTasksParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.replace != null) __params = __params.set('replace', params.replace.toString());
    __body = params.body;
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Tasks`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TasksService.PostApiTasksParams` containing the following parameters:
   *
   * - `replace`:
   *
   * - `body`:
   *
   * - `DbKey`:
   */
  postApiTasks(params: TasksService.PostApiTasksParams): __Observable<null> {
    return this.postApiTasksResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param DbKey undefined
   * @return Success
   */
  getApiTasksTextResponse(DbKey?: string): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (DbKey != null) __headers = __headers.set('DbKey', DbKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tasks/text`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @param DbKey undefined
   * @return Success
   */
  getApiTasksText(DbKey?: string): __Observable<string> {
    return this.getApiTasksTextResponse(DbKey).pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param params The `TasksService.GetApiTasksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   *
   * @return Success
   */
  getApiTasksIdResponse(params: TasksService.GetApiTasksIdParams): __Observable<__StrictHttpResponse<TodoDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tasks/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<TodoDTO>;
      })
    );
  }
  /**
   * @param params The `TasksService.GetApiTasksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   *
   * @return Success
   */
  getApiTasksId(params: TasksService.GetApiTasksIdParams): __Observable<TodoDTO> {
    return this.getApiTasksIdResponse(params).pipe(
      __map(_r => _r.body as TodoDTO)
    );
  }

  /**
   * @param params The `TasksService.PutApiTasksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `DbKey`:
   */
  putApiTasksIdResponse(params: TasksService.PutApiTasksIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.body;
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Tasks/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TasksService.PutApiTasksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `body`:
   *
   * - `DbKey`:
   */
  putApiTasksId(params: TasksService.PutApiTasksIdParams): __Observable<null> {
    return this.putApiTasksIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `TasksService.DeleteApiTasksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   */
  deleteApiTasksIdResponse(params: TasksService.DeleteApiTasksIdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Tasks/${encodeURIComponent(String(params.id))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TasksService.DeleteApiTasksIdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `DbKey`:
   */
  deleteApiTasksId(params: TasksService.DeleteApiTasksIdParams): __Observable<null> {
    return this.deleteApiTasksIdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `TasksService.PostApiTasksIdPostponeParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `ndays`:
   *
   * - `DbKey`:
   */
  postApiTasksIdPostponeResponse(params: TasksService.PostApiTasksIdPostponeParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.ndays != null) __params = __params.set('ndays', params.ndays.toString());
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Tasks/${encodeURIComponent(String(params.id))}/postpone`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TasksService.PostApiTasksIdPostponeParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `ndays`:
   *
   * - `DbKey`:
   */
  postApiTasksIdPostpone(params: TasksService.PostApiTasksIdPostponeParams): __Observable<null> {
    return this.postApiTasksIdPostponeResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `TasksService.PostApiTasksIdPostponeThresholdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `ndays`:
   *
   * - `DbKey`:
   */
  postApiTasksIdPostponeThresholdResponse(params: TasksService.PostApiTasksIdPostponeThresholdParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.ndays != null) __params = __params.set('ndays', params.ndays.toString());
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Tasks/${encodeURIComponent(String(params.id))}/postponeThreshold`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TasksService.PostApiTasksIdPostponeThresholdParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `ndays`:
   *
   * - `DbKey`:
   */
  postApiTasksIdPostponeThreshold(params: TasksService.PostApiTasksIdPostponeThresholdParams): __Observable<null> {
    return this.postApiTasksIdPostponeThresholdResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `TasksService.PutApiTasksIdCompletedParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `isCompleted`:
   *
   * - `DbKey`:
   */
  putApiTasksIdCompletedResponse(params: TasksService.PutApiTasksIdCompletedParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.isCompleted != null) __params = __params.set('isCompleted', params.isCompleted.toString());
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Tasks/${encodeURIComponent(String(params.id))}/completed`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param params The `TasksService.PutApiTasksIdCompletedParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `isCompleted`:
   *
   * - `DbKey`:
   */
  putApiTasksIdCompleted(params: TasksService.PutApiTasksIdCompletedParams): __Observable<null> {
    return this.putApiTasksIdCompletedResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param DbKey undefined
   */
  deleteApiTasksCompletedResponse(DbKey?: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (DbKey != null) __headers = __headers.set('DbKey', DbKey.toString());
    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Tasks/completed`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param DbKey undefined
   */
  deleteApiTasksCompleted(DbKey?: string): __Observable<null> {
    return this.deleteApiTasksCompletedResponse(DbKey).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * @param params The `TasksService.GetApiTasksGroupByGroupByParams` containing the following parameters:
   *
   * - `groupBy`:
   *
   * - `Future`:
   *
   * - `Filters`:
   *
   * - `DbKey`:
   *
   * - `Completed`:
   *
   * @return Success
   */
  getApiTasksGroupByGroupByResponse(params: TasksService.GetApiTasksGroupByGroupByParams): __Observable<__StrictHttpResponse<GroupingViewModelDTO>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    if (params.Future != null) __params = __params.set('Future', params.Future.toString());
    if (params.Filters != null) __params = __params.set('Filters', params.Filters.toString());
    if (params.DbKey != null) __headers = __headers.set('DbKey', params.DbKey.toString());
    if (params.Completed != null) __params = __params.set('Completed', params.Completed.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tasks/groupBy/${encodeURIComponent(String(params.groupBy))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GroupingViewModelDTO>;
      })
    );
  }
  /**
   * @param params The `TasksService.GetApiTasksGroupByGroupByParams` containing the following parameters:
   *
   * - `groupBy`:
   *
   * - `Future`:
   *
   * - `Filters`:
   *
   * - `DbKey`:
   *
   * - `Completed`:
   *
   * @return Success
   */
  getApiTasksGroupByGroupBy(params: TasksService.GetApiTasksGroupByGroupByParams): __Observable<GroupingViewModelDTO> {
    return this.getApiTasksGroupByGroupByResponse(params).pipe(
      __map(_r => _r.body as GroupingViewModelDTO)
    );
  }
}

module TasksService {

  /**
   * Parameters for getApiTasks
   */
  export interface GetApiTasksParams {
    Future?: boolean;
    Filters?: string;
    DbKey?: string;
    Completed?: boolean;
  }

  /**
   * Parameters for postApiTasks
   */
  export interface PostApiTasksParams {
    replace?: boolean;
    body?: StringDTO;
    DbKey?: string;
  }

  /**
   * Parameters for getApiTasksId
   */
  export interface GetApiTasksIdParams {
    id: string;
    DbKey?: string;
  }

  /**
   * Parameters for putApiTasksId
   */
  export interface PutApiTasksIdParams {
    id: string;
    body?: StringDTO;
    DbKey?: string;
  }

  /**
   * Parameters for deleteApiTasksId
   */
  export interface DeleteApiTasksIdParams {
    id: string;
    DbKey?: string;
  }

  /**
   * Parameters for postApiTasksIdPostpone
   */
  export interface PostApiTasksIdPostponeParams {
    id: string;
    ndays?: number;
    DbKey?: string;
  }

  /**
   * Parameters for postApiTasksIdPostponeThreshold
   */
  export interface PostApiTasksIdPostponeThresholdParams {
    id: string;
    ndays?: number;
    DbKey?: string;
  }

  /**
   * Parameters for putApiTasksIdCompleted
   */
  export interface PutApiTasksIdCompletedParams {
    id: string;
    isCompleted?: boolean;
    DbKey?: string;
  }

  /**
   * Parameters for getApiTasksGroupByGroupBy
   */
  export interface GetApiTasksGroupByGroupByParams {
    groupBy: string;
    Future?: boolean;
    Filters?: string;
    DbKey?: string;
    Completed?: boolean;
  }
}

export { TasksService }
