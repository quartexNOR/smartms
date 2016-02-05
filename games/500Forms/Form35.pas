unit Form35;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm35 = class(TW3Form)
  private
    {$I 'Form35:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm35 }

procedure TForm35.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm35.InitializeObject;
begin
  inherited;
  {$I 'Form35:impl'}
end;
 
procedure TForm35.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm35);
end.
