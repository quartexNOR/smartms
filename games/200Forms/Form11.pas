unit Form11;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm11 = class(TW3Form)
  private
    {$I 'Form11:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
    procedure FormActivated; override;
  end;  

implementation
uses Unit1;
{ TForm11 }

procedure TForm11.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm11.InitializeObject;
begin
  inherited;
  {$I 'Form11:impl'}
end;
 
procedure TForm11.Resize;
begin
  inherited;
end;

procedure TForm11.FormActivated;
Begin
  inherited;
  TApplication(application).BackNextButton;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm11);
end.
