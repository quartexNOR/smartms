unit Form230;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm230 = class(TW3Form)
  private
    {$I 'Form230:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm230 }

procedure TForm230.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm230.InitializeObject;
begin
  inherited;
  {$I 'Form230:impl'}
end;
 
procedure TForm230.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm230);
end.
