unit Form162;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm162 = class(TW3Form)
  private
    {$I 'Form162:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
    procedure FormActivated; override;
  end;  

implementation
uses Unit1;
{ TForm162 }

procedure TForm162.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm162.InitializeObject;
begin
  inherited;
  {$I 'Form162:impl'}
end;
 
procedure TForm162.Resize;
begin
  inherited;
end;

procedure TForm162.FormActivated;
Begin
  inherited;
  TApplication(application).BackNextButton;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm162);
end.
