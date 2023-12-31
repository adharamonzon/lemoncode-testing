import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';
import * as projectMapper from './project.mapper';
import * as mapToCollection from 'common/mappers/collection.mapper';
import { mapEmployeeSummaryListFromApiToVm, mapProjectFromApiToVm } from './project.mapper';

describe('when mapEmployeeSummaryListFromApiToVm is called', () => {
  it('should return employeeSumary', () => {
    const employeeSummaryMock : viewModel.EmployeeSummary[] =[
      {
        id: '1',
        isAssigned: true,
        employeeName: 'Ana'
      }
    ]; 
    const result = mapEmployeeSummaryListFromApiToVm(employeeSummaryMock);
    const spy = jest.spyOn(projectMapper, 'mapEmployeeSummaryListFromApiToVm');
    const mapSpy = jest.spyOn(mapToCollection, 'mapToCollection');
    mapEmployeeSummaryListFromApiToVm(employeeSummaryMock);
    expect(result).toEqual(employeeSummaryMock);
    expect(mapSpy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalled();
  })
})

describe('when mapProjectFromApiToVm is called', () => {
  it('should return projectVM object if has a project', () => {
    const projectMock : apiModel.Project = {
      id: '1',
      name: 'test project',
      externalId: '123',
      isActive: true,
      employees: [
        {
          id: '123',
          isAssigned: true,
          employeeName: 'test name'
        }
      ]
    }
    const result : viewModel.Project = mapProjectFromApiToVm(projectMock)
    expect(result).toEqual(projectMock)
  });

  it('should create an empty proyect if not project is given', () => {
    const emptyProjectMock = {
    id: '',
    name: '',
    externalId: '',
    comments: '',
    isActive: false,
    employees: [],
    };
    const spy = jest.spyOn(viewModel, 'createEmptyProject');

    const result = mapProjectFromApiToVm(undefined);
    
    expect(result).toEqual(emptyProjectMock);
    expect(spy).toHaveBeenCalled();
  })
});

