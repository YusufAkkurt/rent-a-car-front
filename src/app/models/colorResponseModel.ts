import { ResponseModel } from './responseModel';
import { Color } from './color';

export interface ColorResponseModel extends ResponseModel {
  data: Color[]
}