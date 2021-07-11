import { ComponentFixture, TestBed } from '@angular/core/testing'
import { perPage } from 'src/app/const'
import { mockMediaVideoFragments } from 'src/app/const/mock/media'
import { AnimeCardListComponent } from './anime-card-list.component'

describe('AnimeCardListComponent', () => {
  let component: AnimeCardListComponent
  let fixture: ComponentFixture<AnimeCardListComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimeCardListComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeCardListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should show placeholder ', () => {
    component.showPlaceholder = true
    fixture.detectChanges()

    const titleElements = document.querySelectorAll('.collection-item__title')
    const descriptionElements = document.querySelectorAll(
      '.collection-item__description'
    )

    expect(titleElements.length).toBe(perPage)
    expect(descriptionElements.length).toBe(perPage)
    titleElements.forEach((element) =>
      expect(element.classList.contains('placeholder')).toBe(true)
    )
    descriptionElements.forEach((element) =>
      expect(element.classList.contains('placeholder')).toBe(true)
    )
  })

  it('should show real content correctly', () => {
    component.showPlaceholder = false
    const mockSplicedMediaVideoFragments = mockMediaVideoFragments.slice(5)
    component.items = mockSplicedMediaVideoFragments
    fixture.detectChanges()

    const titleElements = document.querySelectorAll('.collection-item__title')
    const descriptionElements = document.querySelectorAll(
      '.collection-item__description'
    )

    expect(titleElements.length).toBe(mockSplicedMediaVideoFragments.length)
    expect(descriptionElements.length).toBe(
      mockSplicedMediaVideoFragments.length
    )
    titleElements.forEach((element) =>
      expect(element.classList.contains('placeholder')).toBe(false)
    )
    descriptionElements.forEach((element) =>
      expect(element.classList.contains('placeholder')).toBe(false)
    )
  })
})
