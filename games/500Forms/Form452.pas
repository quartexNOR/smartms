unit Form452;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm452 = class(TW3Form)
  private
    {$I 'Form452:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm452 }

procedure TForm452.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm452.InitializeObject;
begin
  inherited;
  {$I 'Form452:impl'}
end;
 
procedure TForm452.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm452);
end.
