import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing'
import { mockMediaPageInfo } from 'src/app/const/mock/media'
import { PaginationBarComponent } from './pagination-bar.component'

describe('PaginationBarComponent', () => {
  let component: PaginationBarComponent
  let fixture: ComponentFixture<PaginationBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationBarComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationBarComponent)
    component = fixture.componentInstance
    component.pageInfo = mockMediaPageInfo
    fixture.detectChanges()
  })

  it('should load first page of pagination correctly', () => {
    const buttons = getButtons()

    expect(component).toBeTruthy()
    expect(buttons.activePage.textContent).toBe('1')
    expect(buttons.skipPrevious.classList.contains('disabled')).toBe(true)
    expect(buttons.previous.classList.contains('disabled')).toBe(true)
    expect(buttons.skipNext.classList.contains('disabled')).toBe(false)
    expect(buttons.next.classList.contains('disabled')).toBe(false)
  })

  it('should load last page of pagination correctly', fakeAsync(() => {
    const lastPage = mockMediaPageInfo.lastPage as number
    component.pageInfo = {
      ...mockMediaPageInfo,
      currentPage: lastPage,
    }
    fixture.detectChanges()
    tick(200)

    const buttons = getButtons()

    expect(component).toBeTruthy()
    expect(buttons.activePage.textContent).toBe(`${lastPage}`)
    expect(buttons.skipPrevious.classList.contains('disabled')).toBe(false)
    expect(buttons.previous.classList.contains('disabled')).toBe(false)
    expect(buttons.skipNext.classList.contains('disabled')).toBe(true)
    expect(buttons.next.classList.contains('disabled')).toBe(true)
  }))
})

function getButtons() {
  const activePage = document.querySelector('.active') as Element
  const skipPrevious = document.querySelector('.btn-skip-previous') as Element
  const previous = document.querySelector('.btn-previous') as Element
  const skipNext = document.querySelector('.btn-skip-next') as Element
  const next = document.querySelector('.btn-next') as Element
  return {
    activePage,
    skipPrevious,
    previous,
    skipNext,
    next,
  }
}
