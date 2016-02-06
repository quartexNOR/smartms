unit Form3;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm3 = class(TW3Form)
  private
    {$I 'Form3:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
    procedure FormActivated; override;
  end;

implementation
uses Unit1;

{ TForm3 }

procedure TForm3.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm3.InitializeObject;
begin
  inherited;
  {$I 'Form3:impl'}
end;
 
procedure TForm3.Resize;
begin
  inherited;
end;

procedure TForm3.FormActivated;
Begin
  inherited;
  TApplication(application).BackNextButton;
end;

initialization
  Forms.RegisterForm({$I %FILE%}, TForm3);
end.
