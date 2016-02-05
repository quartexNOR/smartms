unit Form54;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm54 = class(TW3Form)
  private
    {$I 'Form54:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm54 }

procedure TForm54.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm54.InitializeObject;
begin
  inherited;
  {$I 'Form54:impl'}
end;
 
procedure TForm54.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm54);
end.
