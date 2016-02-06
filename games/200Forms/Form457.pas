unit Form457;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm457 = class(TW3Form)
  private
    {$I 'Form457:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
    procedure FormActivated; override;
  end;  

implementation
uses Unit1;
{ TForm457 }

procedure TForm457.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm457.InitializeObject;
begin
  inherited;
  {$I 'Form457:impl'}
end;
 
procedure TForm457.Resize;
begin
  inherited;
end;

procedure TForm.FormActivated;
Begin
  inherited;
  TApplication(application).BackNextButton;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm457);
end.
