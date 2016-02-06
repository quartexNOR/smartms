unit Form220;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm220 = class(TW3Form)
  private
    {$I 'Form220:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
    procedure FormActivated; override;
  end;  

implementation
uses Unit1;
{ TForm220 }

procedure TForm220.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm220.InitializeObject;
begin
  inherited;
  {$I 'Form220:impl'}
end;
 
procedure TForm220.Resize;
begin
  inherited;
end;

procedure TForm.FormActivated;
Begin
  inherited;
  TApplication(application).BackNextButton;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm220);
end.
