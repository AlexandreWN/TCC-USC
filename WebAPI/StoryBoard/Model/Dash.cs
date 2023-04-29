﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model;

public class Dash
{
    public int Id { get; private set; }
    public DateTime ActualDate { get; private set; }
    public int IdSprint { get; private set; }
    public int IdUserProject { get; private set; }
    public int IdleTime { get; private set; }
    public int ActualTime { get; private set; }
    public int RevewTime { get; private set; }

    public Sprint Sprint { get; private set; } = default!;
    public UserProject UserProject { get; private set; } = default!;
}