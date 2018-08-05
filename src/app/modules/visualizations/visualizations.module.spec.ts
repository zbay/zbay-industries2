import { VisualizationsModule } from './visualizations.module';

describe('VisualizationsModule', () => {
  let visualizationsModule: VisualizationsModule;

  beforeEach(() => {
    visualizationsModule = new VisualizationsModule();
  });

  it('should create an instance', () => {
    expect(visualizationsModule).toBeTruthy();
  });
});
