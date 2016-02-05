unit Form184;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm184 = class(TW3Form)
  private
    {$I 'Form184:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm184 }

procedure TForm184.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm184.InitializeObject;
begin
  inherited;
  {$I 'Form184:impl'}
end;
 
procedure TForm184.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm184);
end.
