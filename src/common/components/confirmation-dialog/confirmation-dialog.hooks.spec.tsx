import { act, renderHook } from "@testing-library/react";
import { createEmptyLookup, Lookup } from "common/models";
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog specs', () => {
  it('should set default isOpen state', () => {
    const {result} = renderHook(() => useConfirmationDialog());    
    
    const defaultIsOpen: boolean = false;
    expect(result.current.isOpen).toEqual(defaultIsOpen);
  });

  it('should set default itemToDelete state', () => {
    const {result} = renderHook(() => useConfirmationDialog());    
    
    const defaultItemToDelete: Lookup = {id: '', name: ''};
    
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete);
  });

  it('should return onAccept method', () => {
    const {result} = renderHook(() => useConfirmationDialog());
    const spy = jest.spyOn(result.current, 'onAccept').mockImplementation(() => {});
    const defaultItemToDelete: Lookup = { id: '', name: ''};
    
    result.current.onAccept();

    expect(spy).toHaveBeenCalled();
    expect(result.current.itemToDelete).toEqual(defaultItemToDelete)
  });

  it('should return onClose metodh, and set IsOpen to false', () => {
    const {result} = renderHook(() => useConfirmationDialog());
    const spy = jest.spyOn(result.current, 'onClose').mockImplementation(() => {});
    
    result.current.onClose();
    
    expect(spy).toHaveBeenCalled();
    expect(result.current.isOpen).toBe(false);
  });

  it('should return OpenDialog method, and setIsOpen to true, and setItemToDelete info', () => {
    const {result} = renderHook(() => useConfirmationDialog());
    const itemMock = { id: '1', name: 'item'};
    const onOpenDialogSpy = jest.spyOn(result.current, 'onOpenDialog');
    
    act(() => {
      result.current.onOpenDialog(itemMock);
    })
    
    expect(onOpenDialogSpy).toHaveBeenCalled();
    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(itemMock);
  })
})