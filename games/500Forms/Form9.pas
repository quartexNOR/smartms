unit Form9;

interface

uses 
  System.Types, SmartCL.System, SmartCL.Graphics, SmartCL.Components, SmartCL.Forms,
  SmartCL.Fonts, SmartCL.Borders, SmartCL.Application;

type
  TForm9 = class(TW3Form)
  private
    {$I 'Form9:intf'}
  protected
    procedure InitializeForm; override;
    procedure InitializeObject; override;
    procedure Resize; override;
  end;

implementation

{ TForm9 }

procedure TForm9.InitializeForm;
begin
  inherited;
  // this is a good place to initialize components
end;

procedure TForm9.InitializeObject;
begin
  inherited;
  {$I 'Form9:impl'}
end;
 
procedure TForm9.Resize;
begin
  inherited;
end;
 
initialization
  Forms.RegisterForm({$I %FILE%}, TForm9);
end.
