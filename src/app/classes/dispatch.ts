export class Dispatch {
  constructor(
    public id = 0,
    public vehicle_id = 0,
    public plate = "",
    public driver = "",
    public init_latitude = 0.0,
    public init_longitude = 0.0,
    public end_latitude = 0.0,
    public end_longitude = 0.0,
    public odometer_value = 0,
    public reason = ""
  ) {}
}
